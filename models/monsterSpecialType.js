import { schemaBuilder } from "./index"

const MonsterSpecialType = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Monster Special Type is required"],
      unique: [true, "Monster Special Type is already exists"]
    }
  },
  "MonsterSpecialType"
)

export default MonsterSpecialType
