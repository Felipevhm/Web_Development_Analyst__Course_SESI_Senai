module.exports = (sequelize, DataTypes) => {
   const Questionario = sequelize.define('Questionario', {
     titulo: {
       type: DataTypes.STRING,
       allowNull: false,
     },
     descricao: {
       type: DataTypes.STRING,
       allowNull: true,
     },
   });
 
   Questionario.associate = (models) => {
     Questionario.hasMany(models.Pergunta, { foreignKey: 'questionario_id' });
     Questionario.belongsTo(models.Usuario, { foreignKey: 'usuario_id' });
   };
 
   return Questionario;
 };
 