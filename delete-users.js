const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(
  'https://mwhvzkteqqfgfkiefgec.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13aHZ6a3RlcXFmZ2ZraWVmZ2VjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMDA2MDYsImV4cCI6MjA5NTg3NjYwNn0.1LZVx2z_cnD-30HFLnXF127oZJTIEYbCLSSU1idM2DQ'
);

async function deleteAllReaders() {
  try {
    const { error } = await supabase.from('readers').delete().neq('name', '');
    if (error) {
      console.log('Error:', error.message);
    } else {
      console.log('✓ All readers deleted successfully');
    }
  } catch (err) {
    console.error('Exception:', err.message);
  }
}

deleteAllReaders();
