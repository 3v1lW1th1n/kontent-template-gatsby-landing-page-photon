const kontentItemTypeIdentifier = `KontentItem`;


exports.onCreateNode = ({ node, actions: { createNodeField } }) => {
  if (node &&node.intenal && node.internal.type && node.internal.type.startsWith && node.internal.type.startsWith(kontentItemTypeIdentifier)) {

    createNodeField({
      node,
      name: `test_field`,
      value: `test value`
    });
  }
};