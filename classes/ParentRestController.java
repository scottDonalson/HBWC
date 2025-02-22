package rocks.hbwc.hbwc_spring_react.web.rest;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import rocks.hbwc.hbwc_spring_react.services.ParentService;
import rocks.hbwc.hbwc_spring_react.web.errors.BadRequestException;
import rocks.hbwc.hbwc_spring_react.web.models.Parent;

import java.util.List;

/**
 * @author ksdon
 **/

@RestController
@RequestMapping("/api/parents")
public class ParentRestController {

    private final ParentService parentService;

    public ParentRestController(ParentService parentService) {
        this.parentService = parentService;
    }

    @GetMapping
    public List<Parent> getParents(@RequestParam(name="email", required=false) String email) {
        return this.parentService.getAllParents(email);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Parent createWrestler(@RequestBody Parent wrestler) {
        return this.parentService.createOrUpdate(wrestler);
    }

    @GetMapping("/{id}")
    public Parent getWrestlerById(@PathVariable("id") long id) {
        return this.parentService.getParent(id);
    }

    @PutMapping("/{id}")
    public Parent updateWrestler(@PathVariable("id") long id, @RequestBody Parent parent) {
        if(id != parent.getParent_id()){
            throw new BadRequestException("id mismatch");
        }

        return this.parentService.createOrUpdate(parent);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.RESET_CONTENT)
    public void deleteParent(@PathVariable("id") long id) {
        this.parentService.deleteParent(id);
    }
}