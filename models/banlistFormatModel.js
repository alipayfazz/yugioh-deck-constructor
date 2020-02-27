import { schemaBuilder } from "./index"

const BanlistFormat = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Banlist Format is required"],
      unique: [true, "Banlist Format is already exists"]
    }
  },
  "BanlistFormat"
)

export default BanlistFormat
