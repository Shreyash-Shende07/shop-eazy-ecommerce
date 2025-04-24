
// Import all exports from productApi
import * as productApi from './productApi';

// Import all exports from categoryApi but rename the fetchProductsByCategory function
import { fetchCategories, fetchProductsByCategory as fetchProductsByCategoryFromCategory } from './categoryApi';

// Re-export everything from productApi
export * from './productApi';

// Re-export from categoryApi with renamed function
export { fetchCategories, fetchProductsByCategoryFromCategory };
