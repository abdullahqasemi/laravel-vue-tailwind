<template>
  <table>
    <thead>
      <tr>
         <td>id</td>
         <td>name</td>
         <td>email</td>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" v-bind:key="user._id"><td>{{user._id}}</td>
        <td>{{user.name.first +' '+  user.name.last}}</td>
        <td>{{user.email}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>

export default{
data: function(){
  return {
    users: [
    {
    "_id": "5e00fde24086e927d70a3f68",
    "isActive": false,
    "picture": "http://placehold.it/32x32",
    "name": {
    "first": "Elisa",
    "last": "Jensen"
    },
    "email": "elisa.jensen@undefined.co.uk"
    }
      ]
    }
}  
}
</script>