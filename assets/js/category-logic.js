function toggleProject(headerElement) {
    const projectItem = headerElement.parentElement;
    
    // Check if it's already active
    const isActive = projectItem.classList.contains('active');
    
    // Close all other projects (Optional: remove this if you want multiple open)
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });

    // Toggle current
    if (!isActive) {
        projectItem.classList.add('active');
    }
}