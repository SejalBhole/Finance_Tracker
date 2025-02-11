const ExpenseSchema = require('../models/expenseModel.js');


exports.addExpense = async (req, res) => {
    console.log("Received Data:", req.body); // Debugging

    try {
        const { title, amount, date, category, description } = req.body;

        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const expense = new ExpenseSchema({
            title,
            amount,
            date,
            category,
            description
        });

        await expense.save();
        res.status(201).json({ message: "Expense added successfully", data: expense});
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error" });
    }
};



exports.getExpense = async(req, res)=>
    {
    try{
        const incomes = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json({data: incomes});
    }catch(error){
        console.error("Error:", error);
        res.status(500).json({error: "Server error"});
    }
}


exports.deleteExpense = async(req, res)=>
    {
       const{id} = req.params;
       ExpenseSchema.findByIdAndDelete(id)
       .then((expense)=>{
        res.status(200).json({message: 'Expense Deleted'})
       }) 
       .catch((error)=>{
        console.error("Error:", error);
        res.status(500).json({error: "Server error"})
       })
    }
