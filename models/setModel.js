import { schemaBuilder, Schema } from "./index"

const Set = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Set is required"],
      unique: [true, "Set is already exists"]
    },
    cards: [
      {
        card: {
          type: Schema.Types.ObjectId,
          ref: "Card"
        },
        rarity: {
          type: Schema.Types.ObjectId,
          ref: "Rarity"
        },
        code: {
          type: String,
          required: [true, "Card Code in Set is required"],
          unique: [true, "Card Code is already exists"]
        },
        price: {
          type: String,
          required: [true, "Card Price in Set is required"]
        }
      }
    ]
  },
  "Set"
)

export default Set
