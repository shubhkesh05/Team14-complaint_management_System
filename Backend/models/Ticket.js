const mongoose = require('mongoose');
const ticketSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  attachments: [ { url: String, filename: String } ],
  priority: { type: String, enum: ['Low','Medium','High'], default: 'Low' },
  status: { type: String, enum: ['New','Assigned','In Progress','Resolved','Closed'], default: 'New' },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  slaDeadline: Date,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Ticket', ticketSchema);