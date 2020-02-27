import mongoose from "mongoose"

import User from "./userModel"
import Deck from "./deckModel"
import Card from "./cardModel"
import BoosterSet from "./setModel"

import Zone from "./zoneModel"
import Type from "./cardTypeModel"
import ExtraDeckType from "./extraDeckTypeModel"
import Race from "./cardRaceModel"
import Rarity from "./rarityModel"
import Archtype from "./cardArchtypeModel"
import Attribute from "./monsterAttribute"
import MonsterUniqueType from "./monsterUniqueTypeModel"
import MonsterSpecialType from "./monsterSpecialType"
import LinkMarker from "./linkMarkerModel"

import BanlistFormat from "./banlistFormatModel"
import Restriction from "./restrictionModel"

import PriceSource from "./priceSourceModel"

export const Schema = mongoose.Schema
export const schemaBuilder = (properties, modelName, additionalConfig = {}) => {
  const config = { timestamps: true, ...additionalConfig }
  const schema = new Schema(properties, config)
  const Model = mongoose.model(modelName, schema)

  return Model
}
export const validateMinMaxArrayLength = ({
  maxLength,
  minLength = 0
}) => value => {
  return value.length <= maxLength && value.length >= minLength
}

export const UserModel = User
export const DeckModel = Deck
export const CardModel = Card
export const SetModel = BoosterSet
export const ZoneModel = Zone
export const TypeModel = Type
export const ExtraDeckTypeModel = ExtraDeckType
export const RaceModel = Race
export const RarityModel = Rarity
export const ArchtypeModel = Archtype
export const AttributeModel = Attribute
export const MonsterSpecialTypeModel = MonsterSpecialType
export const MonsterUniqueTypeModel = MonsterUniqueType
export const LinkMarkerModel = LinkMarker
export const BanlistModel = BanlistFormat
export const RestrictionModel = Restriction
export const PriceSourceModel = PriceSource
