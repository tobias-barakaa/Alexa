async function fetchUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*');
  
    if (error) {
      console.error('Error fetching users:', error);
    } else {
      console.log('Users:', data);
    }
  }
  
  fetchUsers();
  