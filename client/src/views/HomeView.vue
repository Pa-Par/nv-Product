<template>
    <div class="home">
        <h1>Welcome to Project: nv-Product</h1>
        <p class="intro-text">
            This project is a variation of the nv-webblog68 project, extended with a new model: <strong>Product</strong>.
        </p>
        
        <div class="project-details">
            <h2>📦 New Model: Product</h2>
            <h3>Schema</h3>
            <ul>
                <li><strong>name:</strong> STRING</li>
                <li><strong>description:</strong> TEXT</li>
                <li><strong>price:</strong> FLOAT</li>
                <li><strong>stock:</strong> INTEGER</li>
                <li><strong>image:</strong> STRING</li>
            </ul>

            <h2>⚙️ New Controller</h2>
            <p>A dedicated controller <code>ProductController</code> has been added to handle CRUD operations for Product.</p>

            <h2>🌐 New Routes</h2>
            <p>The following routes have been added to <code>server/src/routes.js</code>:</p>
            <ul>
                <li><code>GET /products</code> - Get all products</li>
                <li><code>POST /product</code> - Create a new product</li>
                <li><code>GET /product/:productId</code> - Get a product by ID</li>
                <li><code>PUT /product/:productId</code> - Update a product</li>
                <li><code>DELETE /product/:productId</code> - Delete a product</li>
            </ul>

            <h2>🚀 Usage</h2>
            <p>Follow standard setup instructions for Client and Server.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView'
}
</script>

<style scoped>
.home {
    padding: 20px;
    max-width: 800px;
    margin: 0 auto; /* จัดให้อยู่กึ่งกลางหน้าจอ */
    color: #333;
    text-align: left; /* จัดเนื้อหาชิดซ้ายให้อ่านง่าย */
}

h1 {
    color: #2c3e50;
    text-align: center;
}

.intro-text {
    text-align: center;
    font-size: 1.1em;
    color: #555;
    margin-bottom: 30px;
}

h2 {
    color: #34495e;
    border-bottom: 2px solid #eee;
    padding-bottom: 10px;
    margin-top: 30px;
}

h3 {
    color: #7f8c8d;
    margin-top: 15px;
}

ul {
    background-color: #f8f9fa;
    padding: 20px 40px;
    border-radius: 8px;
    border: 1px solid #e1e4e8;
}

li {
    margin-bottom: 8px;
    line-height: 1.5;
}

code {
    background-color: #e8eaed;
    color: #d63200;
    padding: 3px 6px;
    border-radius: 4px;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.95em;
}

.project-details {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
</style>