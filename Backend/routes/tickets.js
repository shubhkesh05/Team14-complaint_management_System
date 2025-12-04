const router = require('express').Router();
const Ticket = require('../models/Ticket');
const jwt = require('jsonwebtoken');

function auth(req,res,next){
  const h = req.headers.authorization;
  if(!h) return res.status(401).json({message:'No token'});
  const token = h.split(' ')[1];
  try{
    req.user = jwt.verify(token, process.env.JWT_SECRET||'secret');
    next();
  }catch(e){ res.status(401).json({message:'Invalid token'}); }
}

// create ticket
router.post('/', auth, async (req,res)=>{
  try{
    const {title,description,category,priority,attachments} = req.body;
    const slaDays = priority==='High'?2:priority==='Medium'?7:14;
    const sla = new Date(); sla.setDate(sla.getDate()+slaDays);
    const ticket = await Ticket.create({ title, description, category, priority, attachments, createdBy: req.user.id, slaDeadline: sla });
    res.json({ticketId: ticket._id, status: ticket.status});
  }catch(e){ res.status(500).json({message:e.message}); }
});

// list tickets (basic)
router.get('/', auth, async (req,res)=>{
  try{
    const q = {};
    if(req.user.role === 'user') q.createdBy = req.user.id;
    const tickets = await Ticket.find(q).sort({createdAt:-1}).limit(200);
    res.json({tickets});
  }catch(e){ res.status(500).json({message:e.message}); }
});

// get details
router.get('/:id', auth, async (req,res)=>{
  try{
    const ticket = await Ticket.findById(req.params.id);
    if(!ticket) return res.status(404).json({message:'Not found'});
    res.json({ticket});
  }catch(e){ res.status(500).json({message:e.message}); }
});

// update status
router.put('/:id/status', auth, async (req,res)=>{
  try{
    const {status} = req.body;
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, { status, updatedAt: new Date() }, { new: true });
    res.json({ticket});
  }catch(e){ res.status(500).json({message:e.message}); }
});

module.exports = router;
