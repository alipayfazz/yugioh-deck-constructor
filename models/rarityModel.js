import { schemaBuilder } from "./index"

const Rarity = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Rarity is required"],
      unique: [true, "Rarity is already exists"]
    }
  },
  "Rarity"
)

export default Rarity
