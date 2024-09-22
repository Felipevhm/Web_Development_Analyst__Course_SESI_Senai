module.exports = (sequelize, DataTypes) => {
   const Resposta = sequelize.define('Resposta', {
     conteudo: {
       type: DataTypes.STRING,
       allowNull: false,
     },
   });
 
   Resposta.associate = (models) => {
     Resposta.belongsTo(models.Pergunta, {
       foreignKey: 'pergunta_id',
       onDelete: 'CASCADE',
     });
     Resposta.belongsTo(models.Usuario, {
       foreignKey: 'usuario_id',
       onDelete: 'CASCADE',
     });
   };
 
   return Resposta;
 };
 