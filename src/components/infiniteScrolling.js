const InfiniteScrolling=(props)=>{

    const scrollToEnd =()=>{
        props.setPage(props.page + 1 )
    }

    window.onscroll = function (){
        if(
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
        ){
            scrollToEnd()
        }
    }
}
export default InfiniteScrolling;