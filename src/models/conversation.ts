import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../database';

interface ConversationAttributes {
  id: number;
  user_id: string;
  question: string;
  answer: string;
  created_at?: Date;
  updated_at?: Date;
}

interface ConversationCreationAttributes
  extends Optional<ConversationAttributes, 'id'> {}

class Conversation
  extends Model<ConversationAttributes, ConversationCreationAttributes>
  implements ConversationAttributes
{
  public id!: number;
  public user_id!: string;
  public question!: string;
  public answer!: string;

  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

Conversation.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    }
  },
  {
    sequelize,
    modelName: 'Conversation',
    tableName: 'conversations',
    timestamps: false, // Disable default timestamps
  }
);

export default Conversation;
