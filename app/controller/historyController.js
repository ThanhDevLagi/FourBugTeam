//khai báo modules
const connectDB = require('../configs/connectDB');

// Trang controllers
const historyPage = async (req, res)=> {
    
    res.render('home');
}

module.exports = {
    historyPage
  };