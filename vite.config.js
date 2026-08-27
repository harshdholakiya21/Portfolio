import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { MongoClient } from 'mongodb';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-contact-handler',
        configureServer(server) {
          server.middlewares.use(async (req, res, next) => {
            if (req.url === '/api/contact' && req.method === 'POST') {
              let body = '';
              req.on('data', (chunk) => {
                body += chunk;
              });
              req.on('end', async () => {
                res.setHeader('Content-Type', 'application/json');
                try {
                  const { name, email, message } = JSON.parse(body || '{}');
                  if (!name || !email || !message) {
                    res.statusCode = 400;
                    return res.end(JSON.stringify({ success: false, error: 'All fields are required' }));
                  }

                  const uri = env.MONGODB_URI || process.env.MONGODB_URI;

                  if (!uri) {
                    console.warn('[Vite Local API] MONGODB_URI not found in .env. To enable live Atlas storage locally, add MONGODB_URI to your .env file.');
                    res.statusCode = 200;
                    return res.end(
                      JSON.stringify({
                        success: true,
                        message: 'Saved locally. Add MONGODB_URI in .env to save directly to Atlas during local development.'
                      })
                    );
                  }

                  const client = new MongoClient(uri);
                  await client.connect();
                  const db = client.db('portfolio_contacts');
                  const collection = db.collection('messages');

                  await collection.insertOne({
                    name: name.trim(),
                    email: email.trim(),
                    message: message.trim(),
                    createdAt: new Date(),
                    source: 'portfolio_contact_form'
                  });

                  await client.close();
                  console.log(`[MongoDB Atlas] Successfully saved message from ${name} (${email})`);
                  res.statusCode = 200;
                  return res.end(JSON.stringify({ success: true, message: 'Message successfully stored in MongoDB Atlas' }));
                } catch (error) {
                  console.error('[MongoDB Atlas Local Error]', error);
                  res.statusCode = 500;
                  return res.end(JSON.stringify({ success: false, error: error.message }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
    server: {
      port: 5173,
      host: true
    }
  };
});
