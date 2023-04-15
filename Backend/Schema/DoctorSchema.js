const mongoose = require('mongoose');

const DoctorSchema = new mongoose.Schema({
    FName:{type:String , require:true},
    SName:{type:String , require:true},
    Email:{type:String , require:true},
    Password:{type:String , require:true},
    Phone:{type:String , require:true},
    Verified:{type:Boolean , default:false},
    Department:[{
        Title:{type:String , require:true},
        Experience:{type:String , require:true},
    }],
    Appointments:[
        {
            Appointment_Date:{type:String,required:true},
            Patient:{type:String,required:true},
            Patient_Email:{type:String,required:true},
            Booked_Date:{type:Date,default:Date.now()},
            isDiagnosed:{type:Boolean,default:false},
            Dignosed_with:{type:String},
            Next_Appointment_Date:{type:String},
        }
    ]

}, { collection: 'name$' })

const model = mongoose.model('DoctorSchema', DoctorSchema);
module.exports = model;