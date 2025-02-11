const IncomeSchema = require('../models/incomeModels.js');


exports.addIncome = async (req, res) => {
    console.log("Received Data:", req.body); // Debugging

    try {
        const { title, amount, date, category, description } = req.body;

        if (!title || !amount || !date || !category || !description) {
            return res.status(400).json({ error: "All fields are required." });
        }

        const income = new IncomeSchema({
            title,
            amount,
            date,
            category,
            description
        });

        await income.save();
        res.status(201).json({ message: "Income added successfully", data: income });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Server error" });
    }
};



exports.getIncomes = async(req, res)=>
    {
    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1});
        res.status(200).json({data: incomes});
    }catch(error){
        console.error("Error:", error);
        res.status(500).json({error: "Server error"});
    }
}


exports.deleteIncome = async(req, res)=>
    {
       const{id} = req.params;
       IncomeSchema.findByIdAndDelete(id)
       .then((income)=>{
        res.status(200).json({message: 'Income Deleted'})
       }) 
       .catch((error)=>{
        console.error("Error:", error);
        res.status(500).json({error: "Server error"})
       })
    }
