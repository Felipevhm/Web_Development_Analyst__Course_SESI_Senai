module.exports = (sequelize, DataTypes) => {
   const Usuario = sequelize.define('Usuario', {
     nome: DataTypes.STRING,
     sobrenome: DataTypes.STRING,
     email: DataTypes.STRING,
     senha: DataTypes.STRING,
     permissao: {
       type: DataTypes.STRING,
       allowNull: false,
       defaultValue: 'estudante',
     }
   });
 
   Usuario.associate = models => {
     Usuario.hasMany(models.Questionario, { foreignKey: 'usuario_id' });
     Usuario.hasMany(models.Resposta, { foreignKey: 'usuario_id' });
     Usuario.belongsToMany(models.Permission, {
       through: 'usuario_permissao',
       foreignKey: 'usuario_id',
     });
   };
 
   return Usuario;
 };
 