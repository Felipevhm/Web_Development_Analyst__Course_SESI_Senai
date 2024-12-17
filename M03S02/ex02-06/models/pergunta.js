module.exports = (sequelize, DataTypes) => {
   const Pergunta = sequelize.define('Pergunta', {
     descricao: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     
   }, {
    tableName: 'Perguntas', // Especifica o nome da tabela no banco de dados
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
 