import { schemaBuilder, Schema } from "./index"

const Card = schemaBuilder(
  {
    name: {
      type: String,
      required: [true, "Name of the Card is required"],
      unique: [true, "Card is already exists"]
    },
    description: {
      type: String
    },
    type: {
      type: Schema.Types.ObjectId,
      ref: "Type",
      required: [true, "Type of the Card is required"]
    },
    zone: {
      type: Schema.Types.ObjectId,
      ref: "Zone",
      required: [true, "Zone of the Card is required"]
    },
    race: {
      type: Schema.Types.ObjectId,
      ref: "Race",
      required: [true, "Race of the Card is required"]
    },
    archtype: {
      type: Schema.Types.ObjectId,
      ref: "Archtype"
    },
    attribute: {
      type: Schema.Types.ObjectId,
      ref: "Attribute"
    },
    isEffectMonster: Boolean,
    attack: Number,
    defense: Number,
    level: Number,
    isTuner: Boolean,
    monsterSpecialTypes: [
      {
        type: Schema.Types.ObjectId,
        ref: "MonsterSpecialType"
      }
    ],
    monsterUniqueTypes: [
      {
        type: Schema.Types.ObjectId,
        ref: "MonsterUniqueType"
      }
    ],
    extraDeckTypes: [
      {
        type: Schema.Types.ObjectId,
        ref: "ExtraDeckType"
      }
    ],
    rank: Number,
    scale: Number,
    rating: Number,
    linkMarkers: [
      {
        type: Schema.Types.ObjectId,
        Ref: "LinkMarker"
      }
    ],
    imageURL: String,
    smallImageURL: String,
    sets: [
      {
        type: Schema.Types.ObjectId,
        ref: "Set"
      }
    ],
    restrictionStatus: [
      {
        banlistFormat: {
          type: Schema.Types.ObjectId,
          ref: "BanlistFormat"
        },
        status: {
          type: Schema.Types.ObjectId,
          ref: "Restriction"
        }
      }
    ],
    prices: [
      {
        source: {
          type: Schema.Types.ObjectId,
          ref: "PriceSource"
        },
        price: String
      }
    ]
  },
  "Card"
)

export default Card
