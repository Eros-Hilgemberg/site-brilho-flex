import termsOfUse from '../assets/privacy_policy/terms_of_use.md?raw'
import { LegalDocumentPage } from './LegalDocumentPage'

export function TermsOfUsePage() {
  return (
    <LegalDocumentPage
      content={termsOfUse}
      description="Consulte os Termos de Uso do site da BrilhoFlex."
      path="/termos-de-uso"
    />
  )
}
