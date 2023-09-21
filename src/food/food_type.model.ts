
import { ApiProperty } from "@nestjs/swagger";
import { Model, Table, Column, DataType, ForeignKey, BelongsTo, HasMany, PrimaryKey } from "sequelize-typescript";

interface IFoodTypeCreationAttrs{
    type: string,
}


@Table({ tableName: "Food_Type" })
export class FoodType extends Model<FoodType, IFoodTypeCreationAttrs> {

    @ApiProperty({example: "1", description: "ID категории продукта"})
    @PrimaryKey
    @Column({ type: DataType.BIGINT})
    id: number;

    @ApiProperty({example: "Фастфуд", description: "Название категории продукта"})
    @Column({ type: DataType.STRING(255), allowNull: false })
    type: string;

}