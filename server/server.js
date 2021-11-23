const { ApolloServer } = require('apollo-server');

const typeDefs = `
  type Item {
    id: Int
    category: String
    description: String
    price: Float
  }

  type Query {
    items: [Item]
  }
`;

const items = [];
items.push({
	id: 1,
	category: 'Bebida',
	description: 'Água',
	price: 5,
});
items.push({
	id: 2,
	category: 'Bebida',
	description: 'Suco',
	price: 12,
});
items.push({
	id: 3,
	category: 'Bebida',
	description: 'Refrigerante',
	price: 8,
});

const resolvers = {
	Query: {
		items() {
			return items;
		},
	},
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen();
