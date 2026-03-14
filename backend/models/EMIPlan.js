import mongoose from "mongoose";

const emiPlanSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },

    monthlyPayment: {
      type: Number,
      required: true,
    },

    tenure: {
      type: Number,
      required: true,
    },

    interestRate: {
      type: Number,
      default: 0,
    },

    cashback: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const EMIPlan = mongoose.model("EMIPlan", emiPlanSchema);

export default EMIPlan;