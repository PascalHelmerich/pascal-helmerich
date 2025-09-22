const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API info endpoint
app.get('/api', (req, res) => {
  res.json({
    name: 'Pascal Helmerich API',
    version: '1.0.0',
    description: 'REST API for Pascal Helmerich website',
    endpoints: {
      health: '/health',
      info: '/api',
      projects: '/api/projects',
      contact: '/api/contact'
    }
  });
});

// Projects endpoint (sample data)
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      name: 'PawsOnTheWire',
      description: 'A creative project showcased on the website',
      image: 'pawsonthewire.png',
      status: 'active'
    },
    {
      id: 2,
      name: 'Personal Website',
      description: 'Pascal Helmerich personal portfolio website',
      image: 'portrait.png',
      status: 'active'
    }
  ];
  
  res.json({
    success: true,
    data: projects,
    count: projects.length
  });
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      error: 'Name, email, and message are required'
    });
  }
  
  // In a real application, you'd save this to a database
  console.log('Contact form submission:', { name, email, message });
  
  res.json({
    success: true,
    message: 'Contact form submitted successfully',
    data: { name, email }
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Pascal Helmerich API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/health`);
  console.log(`API info: http://localhost:${PORT}/api`);
});

module.exports = app;