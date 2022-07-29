async function addNewsletterSubscription(enteredEmail, interests) {
  const response = await fetch('/api/users/newsletter', {
    method: 'POST',
    body: JSON.stringify({ email: enteredEmail, interests }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

async function addProductRating(value, id, email) {
  const response = await fetch(`/api/products/rate/${id}`, {
    method: 'POST',
    body: JSON.stringify({ rating: value, email: email }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong!');
  }

  return data;
}

export { addNewsletterSubscription, addProductRating };
