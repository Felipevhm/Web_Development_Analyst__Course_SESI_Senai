module.exports = (sequelize, DataTypes) => {
   const Permission = sequelize.define('Permission', {
     nome: {
       type: DataTypes.STRING,
       allowNull: false,
     },
   });
 
   Permission.associate = models => {
     Permission.belongsToMany(models.Usuario, {
       through: 'usuario_permissao',
       foreignKey: 'permissao_id',
     });
   };
 
   return Permission;
 };
 