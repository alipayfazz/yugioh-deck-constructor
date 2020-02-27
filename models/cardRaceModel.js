import { schemaBuilder } from "./index"

const Race = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Race is required"],
      unique: [true, "Race is already exists"]
    }
  },
  "Race"
)

export default Race
