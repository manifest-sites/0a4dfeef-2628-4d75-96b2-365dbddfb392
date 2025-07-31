import React from 'react';

function PizzaApp() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
          🍕 Pizza Perfect
        </h1>
        
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Delicious pizza with melted cheese and toppings"
            className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
        
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
            The Perfect Slice
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Fresh ingredients, hand-tossed dough, and that perfect golden crust. 
            This is what pizza dreams are made of!
          </p>
        </div>
      </div>
    </div>
  );
}

export default PizzaApp;