import { schemaBuilder } from "./index"

const PriceSource = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Price Source is required"],
      unique: [true, "Price Source is already exists"]
    }
  },
  "PriceSource"
)

export default PriceSource
