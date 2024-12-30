
        let allRecipes = [];

        async function fetchRecipes() {
            try {
                const response = await fetch('https://api.memegen.link/templates');
                const data = await response.json();
                return data;
            } catch (error) {
                console.error('Error fetching recipes:', error);
                return [];
            }
        }

        function createRecipeCard(data) {
            return `
           
            <div class="card" style="width: 16.5rem; margin:10px auto;">
  <img src="${data.blank}"  class=" recipe-image card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${data.name}</h5>
    <p class="card-text">lines:${data.lines}</p>
    
  </div>
</div>
            `;
        }

        function renderRecipes(recipesToRender) {
            const recipeGrid = document.getElementById('recipe-grid');
            recipeGrid.innerHTML = recipesToRender.map(createRecipeCard).join('');
        }

        function filterRecipes(searchQuery) {
            return allRecipes.filter(recipe => 
                recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        document.addEventListener('DOMContentLoaded', async () => {
            const searchInput = document.getElementById('search-input');
            const button = document.getElementById('btn');
            const recipeGrid = document.getElementById('recipe-grid');
            
            recipeGrid.innerHTML = '<p class="loading">Loading recipes...</p>';
        
        allRecipes = await fetchRecipes();
           renderRecipes(allRecipes);

            button.addEventListener('click', (e) => {
            const searchInput = document.getElementById('search-input');
                const filteredRecipes = filterRecipes(searchInput.value);
                renderRecipes(filteredRecipes);
            });
        
})
 