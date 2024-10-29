import GitHubIcon from '@mui/icons-material/GitHub'

export function Footer() {
   return (
      <footer className="footer mt-5 flex items-center justify-between p-3 text-xl text-white">
         <a href="https://github.com/DanC-rep">
            <GitHubIcon fontSize="large" />
         </a>
         <span>© 2024. Barabashnuk</span>
      </footer>
   )
}
