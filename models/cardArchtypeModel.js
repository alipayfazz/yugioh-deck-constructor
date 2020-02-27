import { schemaBuilder } from "./index"

const Archtype = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Archtype is required"],
      unique: [true, "Archtype is already exists"]
    }
  },
  "Archtype"
)

export default Archtype
