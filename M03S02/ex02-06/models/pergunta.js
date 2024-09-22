module.exports = (sequelize, DataTypes) => {
   const Pergunta = sequelize.define('Pergunta', {
     descricao: {
       type: DataTypes.STRING,
       allowNull: false,
     },
   });
 
   Pergunta.associate = (models) => {
     Pergunta.belongsTo(models.Questionario, {
       foreignKey: 'questionario_id',
       onDelete: 'CASCADE',
     });
     Pergunta.hasMany(models.Resposta, {
       foreignKey: 'pergunta_id',
       onDelete: 'CASCADE',
     });
   };
 
   return Pergunta;
 };
 