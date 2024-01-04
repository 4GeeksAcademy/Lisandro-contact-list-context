const getState = ({ getStore, setStore }) => {
	return {
		store: {
			//Your data structures, A.K.A Entities
			contacts: [] //Propiedad que se llama Contacts. Esto lo agregamos.
		},
		actions: {
			//(Arrow) Functions that update the Store
			// Remember to use the scope: scope.state.store & scope.setState()
			getAllContacts: function() {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/lisandro")
					.then(response => response.json())
					.then(data => setStore({ contacts: data })) //data tiene guardado un array de objetos.
					.catch(error => console.log(error));
			}
		}
	};
};

export default getState;
