import { schemaBuilder } from "./index"

const ExtraDeckType = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Extra Deck Type is required"],
      unique: [true, "Extra Deck Type is already exists"]
    }
  },
  "ExtraDeckType"
)

export default ExtraDeckType
