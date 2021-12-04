import mongoose from 'mongoose'

const downloadSchema = mongoose.Schema(
  {
    personalInfomation: {
      name:{ type: String, required: true},
      email:{type: String, required: true},
      company:{type: String, required: true},
      title:{type: String, required: true},
      phoneNumber:{type: String, required: true}
    },
  },
  {
    timestamps: true,
  }
)



const Download = mongoose.model('Download', downloadSchema)

export default Download