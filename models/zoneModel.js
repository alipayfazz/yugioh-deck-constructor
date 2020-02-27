import { schemaBuilder } from "./index"

const Zone = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Zone is required"],
      unique: [true, "Zone is already exists"]
    }
  },
  "Zone"
)

export default Zone
