const Views = {
    dashboard: `
        <div class="kpi-grid">
            <div class="card kpi-card">
                <div class="kpi-label">Revenus Totaux</div>
                <div class="kpi-value">1 250 000 F</div>
                <div class="kpi-trend trend-up">+15.2% ce mois</div>
            </div>
            <div class="card kpi-card">
                <div class="kpi-label">Commandes</div>
                <div class="kpi-value">142</div>
                <div class="kpi-trend trend-up">+8 nouveaux</div>
            </div>
            <div class="card kpi-card">
                <div class="kpi-label">Visiteurs</div>
                <div class="kpi-value">4 320</div>
                <div class="kpi-trend trend-down">-2.1% cette semaine</div>
            </div>
            <div class="card kpi-card">
                <div class="kpi-label">Taux de conversion</div>
                <div class="kpi-value">3.2%</div>
                <div class="kpi-trend trend-up">+0.5%</div>
            </div>
        </div>
        <div class="grid-2">
            <div class="card">
                <div class="table-header">
                    <div class="table-title">Aperçu des ventes</div>
                    <button class="btn btn-ghost">Voir détails</button>
                </div>
                <div style="height: 300px; display: flex; align-items: flex-end; justify-content: space-between; padding: 20px 0; border-bottom: 1px solid var(--border-color);">
                    <div style="width: 10%; height: 40%; background: linear-gradient(to top, #FF416C, transparent); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 10%; height: 60%; background: linear-gradient(to top, #FF416C, transparent); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 10%; height: 35%; background: linear-gradient(to top, #FF416C, transparent); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 10%; height: 80%; background: linear-gradient(to top, #FF416C, transparent); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 10%; height: 50%; background: linear-gradient(to top, #FF416C, transparent); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 10%; height: 90%; background: linear-gradient(to top, #FF416C, transparent); border-radius: 4px 4px 0 0;"></div>
                    <div style="width: 10%; height: 65%; background: linear-gradient(to top, #FF416C, transparent); border-radius: 4px 4px 0 0;"></div>
                </div>
            </div>
            <div class="card">
                <div class="table-header"><div class="table-title">Activité récente</div></div>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <div style="width: 8px; height: 8px; background: #10B981; border-radius: 50%;"></div>
                        <div>Nouvelle commande #1042</div>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <div style="width: 8px; height: 8px; background: #F59E0B; border-radius: 50%;"></div>
                        <div>Stock faible: Sac cuir</div>
                    </div>
                    <div style="display: flex; gap: 10px; align-items: center;">
                        <div style="width: 8px; height: 8px; background: #3B82F6; border-radius: 50%;"></div>
                        <div>Nouveau message client</div>
                    </div>
                </div>
            </div>
        </div>
    `,
    produits: `
        <div class="card">
            <div class="table-header">
                <div class="table-title">Catalogue Produits</div>
                <button class="btn btn-primary">+ Ajouter un produit</button>
            </div>
            <table>
                <thead><tr><th>Produit</th><th>Catégorie</th><th>Prix</th><th>Stock</th><th>Statut</th><th>Action</th></tr></thead>
                <tbody>
                    <tr><td>Sac à main cuir</td><td>Mode Femme</td><td>15 000 F</td><td>24</td><td><span class="badge badge-success">Publié</span></td><td><button class="btn btn-ghost" style="padding: 5px 10px;">Éditer</button></td></tr>
                    <tr><td>Montre Classique</td><td>Accessoires</td><td>22 500 F</td><td>5</td><td><span class="badge badge-warning">Stock bas</span></td><td><button class="btn btn-ghost" style="padding: 5px 10px;">Éditer</button></td></tr>
                    <tr><td>Chaussures Ville</td><td>Mode Homme</td><td>30 000 F</td><td>0</td><td><span class="badge badge-danger">Rupture</span></td><td><button class="btn btn-ghost" style="padding: 5px 10px;">Éditer</button></td></tr>
                </tbody>
            </table>
        </div>
    `,
    categories: `
        <div class="grid-2-eq">
            <div class="card">
                <div class="table-header"><div class="table-title">Catégories existantes</div></div>
                <div style="display: flex; flex-wrap: wrap; gap: 10px;">
                    <span class="badge badge-info" style="padding: 10px 15px; font-size: 14px;">Mode Femme (12)</span>
                    <span class="badge badge-info" style="padding: 10px 15px; font-size: 14px;">Mode Homme (8)</span>
                    <span class="badge badge-info" style="padding: 10px 15px; font-size: 14px;">Électronique (5)</span>
                    <span class="badge badge-info" style="padding: 10px 15px; font-size: 14px;">Maison & Déco (15)</span>
                </div>
            </div>
            <div class="card">
                <div class="table-header"><div class="table-title">Nouvelle Catégorie</div></div>
                <div class="form-group">
                    <label class="form-label">Nom de la catégorie</label>
                    <input type="text" class="form-input" placeholder="Ex: Beauté & Soins">
                </div>
                <div class="form-group">
                    <label class="form-label">Description</label>
                    <textarea class="form-input"></textarea>
                </div>
                <button class="btn btn-primary">Créer</button>
            </div>
        </div>
    `,
    collections: `
        <div class="card">
            <div class="table-header">
                <div class="table-title">Mes Collections</div>
                <button class="btn btn-primary">+ Nouvelle collection</button>
            </div>
            <div class="grid-2-eq">
                <div class="card" style="background: rgba(0,0,0,0.2);">
                    <h3 style="margin-bottom: 10px;">Collection Été 2024</h3>
                    <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 15px;">15 produits</p>
                    <button class="btn btn-ghost">Gérer</button>
                </div>
                <div class="card" style="background: rgba(0,0,0,0.2);">
                    <h3 style="margin-bottom: 10px;">Promo Saint-Valentin</h3>
                    <p style="color: var(--text-muted); font-size: 14px; margin-bottom: 15px;">8 produits</p>
                    <button class="btn btn-ghost">Gérer</button>
                </div>
            </div>
        </div>
    `,
    commandes: `
        <div class="card">
            <div class="table-header">
                <div class="table-title">Gestion des Commandes</div>
                <div style="display: flex; gap: 10px;">
                    <button class="btn btn-ghost">Toutes</button>
                    <button class="btn btn-ghost">En attente</button>
                    <button class="btn btn-ghost">Expédiées</button>
                </div>
            </div>
            <table>
                <thead><tr><th>N° Commande</th><th>Client</th><th>Montant</th><th>Paiement</th><th>Livraison</th><th>Action</th></tr></thead>
                <tbody>
                    <tr><td>#1042</td><td>Awa Kouassi</td><td>45 000 F</td><td><span class="badge badge-warning">Escrow</span></td><td><span class="badge badge-info">Préparation</span></td><td><button class="btn btn-ghost" style="padding: 5px 10px;">Détails</button></td></tr>
                    <tr><td>#1041</td><td>Koffi Mensah</td><td>12 500 F</td><td><span class="badge badge-success">Payé</span></td><td><span class="badge badge-success">Livré</span></td><td><button class="btn btn-ghost" style="padding: 5px 10px;">Détails</button></td></tr>
                </tbody>
            </table>
        </div>
    `,
    clients: `
        <div class="card">
            <div class="table-header"><div class="table-title">Base de Clients</div></div>
            <table>
                <thead><tr><th>Client</th><th>Contact</th><th>Commandes</th><th>Total dépensé</th><th>Statut</th></tr></thead>
                <tbody>
                    <tr><td>Awa Kouassi</td><td>+225 07 00 00 00</td><td>5</td><td>125 000 F</td><td><span class="badge badge-success">Fidèle</span></td></tr>
                    <tr><td>Koffi Mensah</td><td>+225 05 00 00 00</td><td>1</td><td>12 500 F</td><td><span class="badge badge-info">Nouveau</span></td></tr>
                </tbody>
            </table>
        </div>
    `,
    paiements: `
        <div class="kpi-grid">
            <div class="card kpi-card"><div class="kpi-label">Solde Disponible</div><div class="kpi-value">850 000 F</div><button class="btn btn-primary" style="margin-top: 15px;">Retirer</button></div>
            <div class="card kpi-card"><div class="kpi-label">Fonds en Attente</div><div class="kpi-value">320 000 F</div></div>
            <div class="card kpi-card"><div class="kpi-label">Total Retiré</div><div class="kpi-value">2 400 000 F</div></div>
        </div>
        <div class="card">
            <div class="table-header"><div class="table-title">Historique des Transactions</div></div>
            <table>
                <thead><tr><th>ID</th><th>Date</th><th>Montant</th><th>Méthode</th><th>Statut</th></tr></thead>
                <tbody>
                    <tr><td>#TRX884</td><td>12 Juin 2024</td><td>45 000 F</td><td>Wave</td><td><span class="badge badge-success">Libéré</span></td></tr>
                    <tr><td>#TRX883</td><td>10 Juin 2024</td><td>15 000 F</td><td>MTN MoMo</td><td><span class="badge badge-warning">Bloqué</span></td></tr>
                </tbody>
            </table>
        </div>
    `,
    escrow: `
        <div class="card">
            <div class="table-header"><div class="table-title">Mécanisme de Séquestre (Escrow)</div></div>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">Les fonds sont sécurisés jusqu'à validation de la réception par le client.</p>
            <table>
                <thead><tr><th>Commande</th><th>Client</th><th>Montant Bloqué</th><th>Statut Livraison</th><th>Action</th></tr></thead>
                <tbody>
                    <tr><td>#1042</td><td>Awa Kouassi</td><td>45 000 F</td><td>En attente de validation</td><td><button class="btn btn-primary">Forcer la libération</button></td></tr>
                </tbody>
            </table>
        </div>
    `,
    livraisons: `
        <div class="card">
            <div class="table-header"><div class="table-title">Suivi des Livraisons</div></div>
            <table>
                <thead><tr><th>Commande</th><th>Livreur</th><th>N° Suivi</th><th>Statut</th><th>Action</th></tr></thead>
                <tbody>
                    <tr><td>#1041</td><td>UPS Afrique</td><td>1Z999AA10123456784</td><td><span class="badge badge-info">En transit</span></td><td><button class="btn btn-ghost">Suivre</button></td></tr>
                    <tr><td>#1040</td><td>DHL Express</td><td>1234567890</td><td><span class="badge badge-success">Livré</span></td><td><button class="btn btn-ghost">Détails</button></td></tr>
                </tbody>
            </table>
        </div>
    `,
    marketplace: `
        <div class="card" style="text-align: center; padding: 60px;">
            <h2 style="margin-bottom: 15px;">Visibilité Marketplace</h2>
            <p style="color: var(--text-secondary); margin-bottom: 30px; max-width: 500px; margin-left: auto; margin-right: auto;">Activez votre boutique sur la marketplace Shopika pour toucher des milliers de clients supplémentaires.</p>
            <label class="switch" style="display: inline-block; position: relative; width: 60px; height: 34px;">
                <input type="checkbox" checked style="opacity: 0; width: 0; height: 0;">
                <span style="position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #2A2F3D; transition: .4s; border-radius: 34px;"></span>
            </label>
            <p style="margin-top: 15px; color: var(--color-success); font-weight: 600;">Boutique Active</p>
        </div>
    `,
    marketing: `
        <div class="grid-2-eq">
            <div class="card">
                <h3 style="margin-bottom: 15px;">Campagnes WhatsApp</h3>
                <div class="form-group">
                    <label class="form-label">Message</label>
                    <textarea class="form-input" placeholder="Promo exceptionnelle..."></textarea>
                </div>
                <button class="btn btn-primary">Envoyer à 120 clients</button>
            </div>
            <div class="card">
                <h3 style="margin-bottom: 15px;">Codes Promo</h3>
                <div class="form-group">
                    <label class="form-label">Code</label>
                    <input type="text" class="form-input" placeholder="ETE2024">
                </div>
                <div class="form-group">
                    <label class="form-label">Réduction (%)</label>
                    <input type="number" class="form-input" placeholder="20">
                </div>
                <button class="btn btn-primary">Créer le code</button>
            </div>
        </div>
    `,
    avis: `
        <div class="card">
            <div class="table-header"><div class="table-title">Avis Clients</div></div>
            <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="border-bottom: 1px solid var(--border-color); padding-bottom: 20px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <strong>Awa Kouassi</strong> <span style="color: var(--yellow-glow);">★★★★★</span>
                    </div>
                    <p style="color: var(--text-secondary);">Produit conforme à la description, livraison rapide. Je recommande !</p>
                </div>
                <div>
                    <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                        <strong>Koffi Mensah</strong> <span style="color: var(--yellow-glow);">★★★★☆</span>
                    </div>
                    <p style="color: var(--text-secondary);">Bon produit mais emballage un peu abîmé.</p>
                </div>
            </div>
        </div>
    `,
    messages: `
        <div class="card chat-layout">
            <div class="chat-list">
                <div class="chat-item active">
                    <strong>Awa Kouassi</strong>
                    <p style="font-size: 12px; color: var(--text-muted);">Bonjour, ma commande est...</p>
                </div>
                <div class="chat-item">
                    <strong>Koffi Mensah</strong>
                    <p style="font-size: 12px; color: var(--text-muted);">Merci pour la livraison.</p>
                </div>
            </div>
            <div class="chat-window">
                <div class="chat-messages">
                    <div class="message message-received">Bonjour, ma commande est-elle expédiée ?</div>
                    <div class="message message-sent">Bonjour Awa, oui elle est en transit. N° de suivi : 12345.</div>
                </div>
                <div style="display: flex; gap: 10px; margin-top: 20px; border-top: 1px solid var(--border-color); padding-top: 20px;">
                    <input type="text" class="form-input" placeholder="Écrire un message...">
                    <button class="btn btn-primary">Envoyer</button>
                </div>
            </div>
        </div>
    `,
    abonnement: `
        <div class="card plan-card">
            <div class="plan-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <h2 style="font-size: 28px; margin-bottom: 10px;">Plan Premium</h2>
            <p style="color: var(--text-secondary); margin-bottom: 20px;">Renouvellement le 12 Septembre 2024</p>
            <div style="display: flex; gap: 10px; justify-content: center;">
                <button class="btn btn-primary">Renouveler (5 000 F / 3 mois)</button>
                <button class="btn btn-ghost">Changer d'offre</button>
            </div>
        </div>
    `,
    stats: `
        <div class="kpi-grid">
            <div class="card kpi-card"><div class="kpi-label">Visites Totales</div><div class="kpi-value">12 400</div></div>
            <div class="card kpi-card"><div class="kpi-label">Panier Moyen</div><div class="kpi-value">18 500 F</div></div>
            <div class="card kpi-card"><div class="kpi-label">Taux de Rebond</div><div class="kpi-value">42%</div></div>
        </div>
        <div class="card">
            <div class="table-header"><div class="table-title">Analyse des Ventes</div></div>
            <p style="color: var(--text-secondary); text-align: center; padding: 50px 0;">Graphique détaillé des ventes par catégorie.</p>
        </div>
    `,
    personnalisation: `
        <div class="grid-2-eq">
            <div class="card">
                <h3 style="margin-bottom: 20px;">Identité Visuelle</h3>
                <div class="form-group"><label class="form-label">Nom de la boutique</label><input type="text" class="form-input" value="Ma Boutique"></div>
                <div class="form-group"><label class="form-label">Couleur principale</label><input type="color" value="#FF4B2B" style="width: 100%; height: 40px; background: none; border: 1px solid var(--border-color); border-radius: 10px;"></div>
            </div>
            <div class="card">
                <h3 style="margin-bottom: 20px;">Nom de domaine</h3>
                <div class="form-group"><label class="form-label">Sous-domaine Shopika</label><input type="text" class="form-input" value="maboutique.shopika.com"></div>
                <button class="btn btn-primary">Enregistrer les modifications</button>
            </div>
        </div>
    `,
    parametres: `
        <div class="card">
            <h3 style="margin-bottom: 20px;">Paramètres du compte</h3>
            <div class="form-group"><label class="form-label">Téléphone</label><input type="text" class="form-input" value="+225 07 00 00 00"></div>
            <div class="form-group"><label class="form-label">Email</label><input type="email" class="form-input" value="contact@maboutique.com"></div>
            <div class="form-group"><label class="form-label">Méthode de paiement par défaut</label><select class="form-input"><option>Mobile Money (MTN)</option><option>VISA</option></select></div>
            <button class="btn btn-primary">Mettre à jour</button>
        </div>
    `,
    support: `
        <div class="card" style="max-width: 600px; margin: 0 auto;">
            <h3 style="margin-bottom: 20px; text-align: center;">Contacter le Support Shopika</h3>
            <div class="form-group"><label class="form-label">Sujet</label><input type="text" class="form-input" placeholder="Problème de paiement..."></div>
            <div class="form-group"><label class="form-label">Description</label><textarea class="form-input" style="min-height: 150px;"></textarea></div>
            <button class="btn btn-primary" style="width: 100%;">Envoyer le ticket</button>
        </div>
    `
};