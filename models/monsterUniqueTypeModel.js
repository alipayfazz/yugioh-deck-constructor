import { schemaBuilder } from "./index"

const MonsterUniqueType = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Monster Unique Type is required"],
      unique: [true, "Monster Unique Type is already exists"]
    }
  },
  "MonsterUniqueType"
)

export default MonsterUniqueType
