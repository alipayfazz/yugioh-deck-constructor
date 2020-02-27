import { schemaBuilder } from "./index"

const Restriction = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Restriction is required"],
      unique: [true, "Restriction is already exists"]
    }
  },
  "Restriction"
)

export default Restriction
