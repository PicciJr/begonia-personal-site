<script>
export default {
  asyncData ({ redirect }) {
    // Redirect user if tries to access a missing route
    return redirect('/tienda')
  }
}
</script>
