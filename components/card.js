import { countdown } from './countdown.js'
import { expandedView } from './expandedView.js'

export const card = (piece) => {
	const card = document.createElement('article')
	card.className = 'card m-2'
	card.style = 'width: 18rem;'
	// card.addEventListener('click', () => {
	// 	expandedView(piece)
	// })
	card.addEventListener('mouseover', (e) => {
		card.className = 'card m-2 border border-warning'
	})
	card.addEventListener('mouseout', (e) => {
		card.className = 'card m-2'
	})
	card.innerHTML = `
  		<img src="${piece.image}" class="card-img" alt="${piece.title}">
			<span class="fs-6 position-absolute top-0 start-50 m-2 translate-middle badge rounded-pill bg-danger">
				Buyout: $${piece.buyout.toLocaleString('en-US')}</span>
  		<div class="card-body">
    		<h5 class="card-title">${piece.title}</h5>
    		<p class="card-text">Artist: ${piece.artist}</p>
  		</div>
  		<ul class="list-group list-group-flush">
				<li class="list-group-item">Medium: ${piece.medium}</li>
				<li class="list-group-item">Dimensions: ${piece.dimensions}</li>
				<li class="list-group-item">Completed: ${piece.date}</li>
  		</ul>
			<span id="${
				piece.id
			}" class="fs-5 text-warning justify-content-around">Current Bid: $${piece.currentBid.toLocaleString(
		'en-US'
	)}</span>
			<div class="input-group my-3">
					<span class="input-group-text">$</span>
					<input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
					<span class="input-group-text">.00</span>
					<button class="btn btn-outline-success" type="button">Bid</button>
							<button type="button" onClick="${(piece) => expandedView(piece)}" class="btn btn-outline-primary px-5 m-3 rounded-pill" data-bs-toggle="modal" data-bs-target="#modal">View Details</button>
					</div>`


	const span = document.createElement('span')
	span.id = `span-${piece.id}`
	span.className =
		'fs-6 position-relative top-0 start-50 translate-middle badge rounded-pill text-bg-warning'
	countdown(span, piece.timeLeft)
	card.append(span)
	container.append(card)
}
