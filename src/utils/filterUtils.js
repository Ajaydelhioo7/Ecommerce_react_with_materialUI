// Utility function to apply filters to products
export const applyFilters = (products, filters) => {
  const { subject, exam, category } = filters;

  return products.filter((product) => {
    const subjectMatch =
      subject.length === 0 || subject.includes(product.subject);
    const examMatch = exam.length === 0 || exam.includes(product.exam);
    const categoryMatch =
      category.length === 0 || category.includes(product.category);

    return subjectMatch && examMatch && categoryMatch;
  });
};
