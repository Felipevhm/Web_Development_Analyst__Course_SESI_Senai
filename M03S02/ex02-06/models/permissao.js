module.exports = (sequelize, DataTypes) => {
   const Permissao = sequelize.define('Permissao', {
     nome: {
       type: DataTypes.STRING,
       allowNull: false,
     },
   });
 
   Permissao.associate = models => {
     Permissao.belongsToMany(models.Usuario, {
       through: 'usuario_permissao',
       foreignKey: 'permissao_id',
     });
   };
 
   return Permissao;
 };
 